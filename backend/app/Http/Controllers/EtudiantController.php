<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;

class EtudiantController extends Controller
{

    // ajouter etudiant
    public function store(Request $request)
    {
        $etudiant = new Etudiant();

        $etudiant->nom = $request->nom;
        $etudiant->prenom = $request->prenom;
        $etudiant->cne = $request->cne;

        $etudiant->note1 = $request->note1;
        $etudiant->note2 = $request->note2;
        $etudiant->note3 = $request->note3;

        $etudiant->moyenne =
            ($request->note1 + $request->note2 + $request->note3) / 3;

        $etudiant->save();

        return response()->json([
            "message" => "OK",
            "data" => $etudiant
        ]);
    }

   public function index()
{
    return response()->json([
        "message" => "OK",
        "data" => Etudiant::all()
    ]);
}
public function show($id){
      $etudiant = Etudiant::find($id);

    if (!$etudiant) {
        return response()->json(['message' => 'Not found'], 404);
    }

    return response()->json($etudiant);
}
public function update(Request $request, $id)
{
    $etudiant = Etudiant::find($id);

    if (!$etudiant) {
        return response()->json(['message' => 'Not found'], 404);
    }

    $etudiant->note1 = $request->note1;
    $etudiant->note2 = $request->note2;
    $etudiant->note3 = $request->note3;

    $etudiant->moyenne =
        ($request->note1 + $request->note2 + $request->note3) / 3;

    $etudiant->save();

    return response()->json([
        'message' => 'Updated successfully',
        'data' => $etudiant
    ]);
}
}