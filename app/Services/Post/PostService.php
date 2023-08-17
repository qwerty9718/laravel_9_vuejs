<?php


namespace App\Services\Post;


use App\Http\Controllers\Controller;
use App\Models\ImagePost;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class PostService extends Controller
{

    public function createPost($data){
        if (isset($data['images'])) {
            $images = $data['images'];
            unset($data['images']);
        }
        $post = Post::create($data);
        if (isset($images)) {
            foreach ($images as $image) {
                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $filePath = Storage::disk('public')->putFileAs('/post_images', $image, $name);
                ImagePost::create(['path' => $filePath, 'url' => url('/storage/' . $filePath), 'post_id' => $post->id]);
            }
        }
    }


    public function delete($id){
        $post = Post::findOrFail($id);
        if (isset($post->images)){
            foreach ($post->images as $image){
                Storage::disk('public')->delete($image->path);
                $image->delete($image);
            }
        }

        $post->delete($id);
    }

    public function updatePost($data,$post){
        if (isset($data['images']) ){
            $images = $data['images'];
            unset($data['images']);
        }


        if(isset($images)){


            if (isset($post->images)){
                foreach ($post->images as $image){
                    Storage::disk('public')->delete($image->path);
                    $image->delete($image);
                }
            }

            foreach ($images as $image){
                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $filePath = Storage::disk('public')->putFileAs('/post_images',$image,$name);
                ImagePost::create([
                    'path' => $filePath,
                    'url' => url('/storage/'.$filePath),
                    'post_id' => $post->id
                ]);
            }
        }

        $post->update($data);

    }

}
