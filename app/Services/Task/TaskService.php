<?php


namespace App\Services\Task;


use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class TaskService extends Controller{
    public function updateTask($data,$task){
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
    }

    public function create($data){
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
}
