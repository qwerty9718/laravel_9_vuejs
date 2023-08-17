<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Image;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class TaskController extends SecondBaseController
{

    public function updateTask($id,TaskRequest $request){
        $task = Task::findOrFail($id);
        $data = $request->validated();
        $this->service->updateTask($data,$task);
        return 'Задача обновлена';

    }

    public function create(TaskRequest $request){
        $data = $request->validated();
        $this->service->create($data);
        return 'Задача создана';
    }

    public function delete($id){
       $this->service->delete($id);
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
