<?php


namespace App\Http\Controllers\Api;


use App\Services\Task\TaskService;

class SecondBaseController
{
    public $service;

    public function __construct(TaskService $service){
        $this->service = $service;
    }
}
