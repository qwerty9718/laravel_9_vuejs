<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Image;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TaskController extends Controller
{

    public function updateTask($id,TaskRequest $request){

        $task = Task::findOrFail($id);

        $data = $request->validated();
        if (isset($data['images']) ){
            $images = $data['images'];
            unset($data['images']);
        }


        if(isset($images)){


            if (isset($task->images)){
                foreach ($task->images as $image){
                    Storage::disk('public')->delete($image->path);
                    $image->delete($image);
                }
            }

            foreach ($images as $image){
                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $filePath = Storage::disk('public')->putFileAs('/images',$image,$name);
                Image::create([
                    'path' => $filePath,
                    'url' => url('/storage/'.$filePath),
                    'task_id' => $task->id
                ]);
            }
        }

        $task->update($data);


        return 'Задача обновлена';

    }

    public function create(TaskRequest $request){


        $data = $request->validated();
        if (isset($data['images']) ){
            $images = $data['images'];
            unset($data['images']);
        }

        $task = Task::create($data);

        if(isset($images)){
            foreach ($images as $image){
                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $filePath = Storage::disk('public')->putFileAs('/images',$image,$name);
                Image::create([
                    'path' => $filePath,
                    'url' => url('/storage/'.$filePath),
                    'task_id' => $task->id
                ]);
            }
        }

        return 'Задача создана';
    }

    public function delete($id){
        $task = Task::findOrFail($id);
        if (isset($task->images)){
            foreach ($task->images as $image){
                Storage::disk('public')->delete($image->path);
                $image->delete($image);
            }
        }

        $task->delete($id);
    }


    public function getTask($id){
        $task = Task::findOrFail($id);
        $task->images;
        return $task;
    }

    public function updateStatus($id){
        $task = Task::findOrFail($id);
        if ($task->column_id < 4){
            $task->update(['column_id'=>$task->column_id+=1]);
        }

    }
}
