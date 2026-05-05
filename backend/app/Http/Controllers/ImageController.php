<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends Controller
{
    // 📤 upload image (store in DB as BLOB)
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048'
        ]);

        $file = $request->file('image');

        $image = Image::create([
            'name' => $file->getClientOriginalName(),
            'type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'bin_img' => file_get_contents($file->getRealPath())
        ]);

        // نرجعو نفس format ديال index باش React يفهم مباشرة
        return response()->json([
            'id' => $image->id,
            'name' => $image->name,
            'type' => $image->type,
            'size' => $image->size,
            'image' => base64_encode($image->bin_img)
        ]);
    }

    // 📥 get all images
    public function index()
    {
        $images = Image::all();

        return response()->json(
            $images->map(function ($img) {
                return [
                    'id' => $img->id,
                    'name' => $img->name,
                    'type' => $img->type,
                    'size' => $img->size,
                    'image' => base64_encode($img->bin_img)
                ];
            })
        );
    }
}