<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Image;
use App\Models\Playlist;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'icons' => Image::where('is_profil', true)->get()
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->fill($request->validated());

        // Vérifier si l'email a été modifié
        if ($user->isDirty('email')) {
            $user->email_verified_at = null; // Réinitialiser la vérification de l'email
        }

        // Assurez-vous que le champ id_img est correctement mis à jour
        // Si vous voulez faire des validations ou des actions spécifiques avant de mettre à jour l'id_img, vous pouvez le faire ici
        if ($request->has('id_img')) {
            $user->id_img = $request->input('id_img');  // Mettre à jour l'id_img spécifiquement
        }

        // Sauvegarder les changements dans la base de données
        $user->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
