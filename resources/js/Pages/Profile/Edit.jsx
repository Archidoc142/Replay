import { Head } from '@inertiajs/react';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status, icons }) {
    return (
        <div>
            <Head title="Profile" />

            <div>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="p-8"
                    icons={icons}
                />

                <UpdatePasswordForm className="max-w-xl" />
            </div>
        </div>
    );
}
