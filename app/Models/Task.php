<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use function Symfony\Component\Translation\t;

class Task extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function images(){
        return $this->hasMany(Image::class, 'task_id', 'id');
    }

}
