<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Column;
use Illuminate\Http\Request;

class ColumnController extends Controller
{
    public function index()
    {
        $columns = Column::all();
        $response = [];


        for ($i = 0; $i < count($columns); $i++) {
            $response[] = $columns[$i];
            for ($j = 0; $j < count($response); $j++) {
                foreach ($response[$j]->tasks as $item){
                    $item->images;
                }
            }
        }

        return $columns;

    }
}
