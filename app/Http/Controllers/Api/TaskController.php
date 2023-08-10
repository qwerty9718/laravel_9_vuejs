<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function create(TaskRequest $request){
        $data = $request->validated();
        Task::create($data);
        return 'Задача создана';
    }

    public function delete($id){
        $task = Task::findOrFail($id)->delete();
    }
}
