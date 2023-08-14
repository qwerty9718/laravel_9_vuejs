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


        if (count($columns) <= 0) {
           $this->createDataBase();
        }


        for ($i = 0; $i < count($columns); $i++) {
            $response[] = $columns[$i];
            for ($j = 0; $j < count($response); $j++) {
                foreach ($response[$j]->tasks as $item) {
                    $item->images;
                }
            }
        }

        return $columns;

    }



    public function createDataBase(){
        $data = [
            [
                "id" => 1,
                "title" => 'Список задач',
                "style" => 'card-secondary',
            ],
            [
                "id" => 2,
                "title" => 'Выбрали для выполнения',
                "style" => 'card-primary',
            ],
            [
                "id" => 3,
                "title" => 'В процессе',
                "style" => 'card-info',
            ],
            [
                "id" => 4,
                "title" => 'Завершенные',
                "style" => 'card-success',
            ],
        ];


        for ($i = 0; $i < count($data); $i++){
            Column::create($data[$i]);
        }
    }
}
