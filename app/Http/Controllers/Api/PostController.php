<?php

namespace App\Http\Controllers\Api;


use App\Http\Requests\PostRequest;
use App\Models\Post;


class PostController extends BaseController
{
    public function getAllPosts(){
//        $posts = Post::orderBy('id', 'desc')->get();
        $posts = Post::orderBy('id', 'desc')->paginate(10);
        foreach ($posts as $post){$post->images;}
        return $posts;
    }

    public function findPostById($id){
        $post = Post::findOrFail($id);
        $post->images;
        return $post;
    }


    public function createPost(PostRequest $request){
        $data = $request->validated();
        $this->service->createPost($data);
        return 'Пост создан';
    }

    public function delete($id){
        $this->service->delete($id);
    }

    public function updatePost($id,PostRequest $request){
        $post = Post::findOrFail($id);
        $data = $request->validated();
        $this->service->updatePost($data,$post);
        return 'Пост обновлен';
    }
}
