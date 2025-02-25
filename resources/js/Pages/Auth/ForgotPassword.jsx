import InputError from '@/Components/Breeze/InputError';
import PrimaryButton from '@/Components/Breeze/PrimaryButton';
import TextInput from '@/Components/Breeze/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className='center flex-col h-screen'>
            <Head title="Mot de passe oublié" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h1 className='text-4xl'>Mot de passe Oublié?</h1>

            <form onSubmit={submit} className='w-[530px] mt-4'>
                <div className='bg-[#14151a] pt-4 px-8 pb-6 m-4 border-[3px] border-[#5a5a5c]'>
                    <div className="form__group field mb-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form__field"
                            placeholder=""
                            value={data.email}
                            required
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <label htmlFor="email" className="form__label">Courriel</label>
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton className="ms-4 bg-transparent border-[3px] border-[#5a5a5c] rounded-none" disabled={processing}>
                            Envoyer le courriel
                        </PrimaryButton>
                    </div>
                </div>

                <p className='text-center mt-8'>Vous n'avez pas encore de comtpe? <span className='font-bold text-[#ff5e00] hover:text-white transition-colors duration-300'><Link href={route('register')}>CRÉER EN UN</Link></span></p>
            </form>
        </div>
    );
}
