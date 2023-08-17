<?php


namespace App\Http\Controllers\Api;


use App\Services\Post\PostService;

class BaseController
{
    public $service;

    public function __construct(PostService $service){
        $this->service = $service;
    }
}
