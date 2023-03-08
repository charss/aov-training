<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        DB::statement("SET SQL_MODE=''");
        $books = DB::table('books')
                    ->leftjoin('book_author', 'books.id', '=', 'book_author.book_id')
                    ->leftjoin('authors', 'authors.id', '=', 'book_author.author_id')
                    ->select('books.id', 'books.title as title', DB::raw("GROUP_CONCAT(authors.name SEPARATOR ', ') as author"))
                    ->groupBy('books.id')
                    ->get();
    
        return response($books, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'books.*.title' => 'required'
        ]);

        if ($validator->fails()) {
            return response('Title is required', 400);
        }

        $inputs = $request->all()["books"];

        // returns 1 if row is updated
        $insert = DB::table('books')->insert($inputs);
        return response(["message"=>"Book added successfully"], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = DB::table('books')->where('id', $id)->first();

        return response([$book], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Check first if the book exist
        $data = DB::table('books')->where('id', $id);
        if (!$data->first()) {
            return response('Id does not exist', 404);
        }

        $request->validate([
            'title' => 'required',
        ]);

        $input = $request->all();
        $data->update($input);

        return response(["message" => "Book updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $deleted = DB::table('books')->where('id', $id)->delete();

        if ($deleted == 0) {
            return response('Id does not exist', 404);
        }

        return response('', 200);
    }
}
