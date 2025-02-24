import InputError from '@/Components/Breeze/InputError';
import PrimaryButton from '@/Components/Breeze/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className='center flex-col h-screen'>

            <Head title="Créer un compte" />

            <h1 className='text-4xl'>Créer un compte</h1>

            <form onSubmit={submit} className='w-[530px] mt-4'>
                <div className='bg-[#14151a] pt-6 px-8 pb-10 m-4 border-[3px] border-[#5a5a5c]'>

                    <div className="form__group field mb-2">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="form__field"
                            placeholder=""
                            value={data.username}
                            required
                            onChange={(e) => setData('username', e.target.value)}
                        />
                        <label htmlFor="username" className="form__label">Nom</label>
                        <InputError message={errors.username} className="mt-2" />
                    </div>

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

                    <div className="form__group field">
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
                        <label htmlFor="password_confirmation" className="form__label">Confirmer le Mot de passe</label>
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>


                <div className="mt-8 flex flex-col items-center justify-end gap-16">
                    <PrimaryButton className="bg-transparent border-[3px] py-3 px-6 !text-[16px] border-[#5a5a5c] rounded-none" disabled={processing}>
                        CRÉER UN COMPTE
                    </PrimaryButton>


                    <p>Vous avez déjà un compte? <span className='font-bold text-[#ff5e00] hover:text-white transition-colors duration-300'><Link href={route('login')}>SE CONNECTER</Link></span></p>
                </div>
            </form>
        </div>
    );
}
