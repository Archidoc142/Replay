import { Head } from '@inertiajs/react';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status, icons }) {
    return (
        <div>
            <Head title="Profile" />

            <div className='p-8'>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    icons={icons}
                />

                <UpdatePasswordForm className="mt-4" />
            </div>
        </div>
    );
}
