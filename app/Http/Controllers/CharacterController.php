<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Character;
use Inertia\Inertia;

class CharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Character/CreateCharacterForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Character $play)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Character $play)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Character $play)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Character $play)
    {
        //
    }
}
