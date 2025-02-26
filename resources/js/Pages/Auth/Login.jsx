import Checkbox from '@/Components/Breeze/Checkbox';
import InputError from '@/Components/Breeze/InputError';
import PrimaryButton from '@/Components/Breeze/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className='center flex-col h-screen'>

            <Head title="Se connecter" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h1 className='text-4xl'>Se connecter</h1>

            <form onSubmit={submit} className='w-[530px] mt-4'>
                <div className='bg-[#14151a] pt-6 px-8 pb-10 m-4 border-[3px] border-[#5a5a5c]'>

                    <div className="form__group field mb-2">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form__field"
                            placeholder=""
                            value={data.email}
                            required
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <label htmlFor="email" className="form__label">Email</label>
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="form__group field mb-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form__field"
                            placeholder=""
                            value={data.password}
                            required
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <label htmlFor="email" className="form__label">Mot de passe</label>
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center checkbox-btn">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="checkmark"></span>

                            <span className="ms-2 text-sm text-gray-200">
                                Se souvenir de moi
                            </span>
                        </label>
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline hover:text-gray-300"
                            >
                                Vous avez oublié votre mot de passe?
                            </Link>
                        )}

                        <PrimaryButton className="bg-transparent border-[3px] border-[#5a5a5c] rounded-none" disabled={processing}>
                            Se connecter
                        </PrimaryButton>
                    </div>
                </div>

                <p className='text-center mt-8'>Vous n'avez pas encore de comtpe? <span className='font-bold text-[#ff5e00] hover:text-white transition-colors duration-300'><Link href={route('register')}>CRÉER EN UN</Link></span></p>
            </form>
        </div>
    );
}
