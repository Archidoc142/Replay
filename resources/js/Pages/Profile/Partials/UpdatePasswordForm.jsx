import InputError from '@/Components/Breeze/InputError';
import InputLabel from '@/Components/Breeze/InputLabel';
import PrimaryButton from '@/Components/Breeze/PrimaryButton';
import TextInput from '@/Components/Breeze/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-2xl font-medium">
                    Modifier le Mot de Passe
                </h2>

                <hr className="border-gray-500 mt-4" />
            </header>

            <form onSubmit={updatePassword} className="mt-2 w-2/3 space-y-6">
                <div className="form__group field mb-2">
                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        name="current_password"
                        type="password"
                        className="form__field"
                        placeholder=""
                        value={data.current_password}
                        required
                        onChange={(e) => setData('current_password', e.target.value)}
                    />
                    <label htmlFor="current_password" className="form__label">Mot de Passe Actuel</label>
                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div className="form__group field mb-2">
                    <input
                        id="password"
                        ref={passwordInput}
                        name="current_password"
                        type="password"
                        className="form__field"
                        placeholder=""
                        value={data.password}
                        required
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <label htmlFor="password" className="form__label">Nouveau Mot de Passe</label>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="form__group field mb-2">
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        className="form__field"
                        placeholder=""
                        value={data.password_confirmation}
                        required
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    <label htmlFor="password_confirmation" className="form__label">Nouveau Mot de Passe</label>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton className="bg-transparent border-[3px] border-[#5a5a5c] rounded-none" disabled={processing}>Sauvegarder</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Sauvegardé
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
