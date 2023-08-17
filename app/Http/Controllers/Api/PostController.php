<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAllPosts(){
        $posts = Post::all();
        foreach ($posts as $post){
            $post->images;
        }

        return $posts;
    }

    public function findPostById($id){
        $post = Post::findOrFail($id);
        $post->images;
        return $post;
    }
}
