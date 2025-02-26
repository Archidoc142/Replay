import InputError from '@/Components/Breeze/InputError';
import PrimaryButton from '@/Components/Breeze/PrimaryButton';
import Carrousel from '@/Components/UI/Carrousel';
import Icon from '@/Components/UI/Icon';
import PopUp from '@/Components/UI/PopUp';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
    icons,
}) {
    const user = usePage().props.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.data.name,
            email: user.data.email,
            id_img: user.data.icon_profil.id
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    const [hover, setHover] = useState(false)
    const [showIconMenu, setShowIconMenu] = useState(false)
    const [img, setImg] = useState(user?.data?.icon_profil?.file_name || null)

    useEffect(() => {
        setImg(icons[data.id_img - 1].file_name)
    }, [data.id_img])

    return (
        <section className={className}>
            <header>
                <h2 className="text-4xl font-medium">
                    Modifier le profil
                </h2>

                <hr className="border-gray-500 mt-4" />
            </header>

            {showIconMenu ?
                <PopUp className="!p-0 min-w-[50%] min-h-[30%]" setShow={setShowIconMenu}>
                    <h3 className='text-3xl'></h3>
                    <Carrousel
                        title="Modifier l'icon"
                        nb_items={6}
                        datas={icons}
                        type="icon"
                        setData={setData}
                        setShow={setShowIconMenu}
                    >
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>                    </Carrousel>
                </PopUp>
                : null}

            <form onSubmit={submit} className="py-8">
                <div className='flex gap-12'>

                    <div className='flex justify-center items-center relative cursor-pointer w-1/3'
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => setShowIconMenu(true)}
                    >
                        <Icon
                            path={img}
                            size={300}
                            className="filter-[#181818bb]"
                        />
                        {hover ?
                            <div className='absolute bg-[#181818bb] w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center text-lg gap-2'>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" /><circle cx="10" cy="10" r="4" /></g></svg>
                                <p>Modifier l'icon</p>
                            </div>
                            : null}
                    </div>

                    <div className='w-2/3 mr-4'>
                        <div className="form__group field mb-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form__field"
                                placeholder=""
                                value={data.name}
                                required
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <label htmlFor="name" className="form__label">Nom d'utilisateur</label>
                            <InputError message={errors.name} className="mt-2" />
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

                        <div className="flex items-center gap-4 mt-6 justify-end">
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
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Votre adresse courriel n'est pas vérifié.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Cliquer ici pour renvoyer le courriel de vérification
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Un nouveau lien de vérification à été envoyé à votre adresse courriel.
                            </div>
                        )}
                    </div>
                )}
            </form>
        </section>
    );
}
