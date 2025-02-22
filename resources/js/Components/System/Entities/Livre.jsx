import Image from "@/Components/Common/Image";
import Tag from "@/Components/UI/Tag";
import { usePage } from "@inertiajs/react";

export default function Livre({ book }) {

    const genres = usePage().props.genres

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div
                style={{ backgroundImage: `url('/img/${book.meta.img_couverture}')` }}
                className="bg-cover bg-center h-screen w-full blur-[3px] opacity-90 absolute"
            ></div>

            <div className="absolute top-[450px] bg-[#191a1c] opacity-[0.99] h-screen w-full"></div>
            <div className="absolute bg-[#191a1c] opacity-[0.8] h-screen w-full"></div>

            <div className="absolute py-8 px-10">
                <div className="flex gap-8">
                    <Image
                        src={"/img/" + book.meta.img_couverture}
                        alt={book.title}
                        isExpandable={true}
                        className="max-w-[300px] rounded-md"
                    />

                    <div>
                        <h1 className="text-7xl mb-2">{book.title}</h1>
                        <div className="flex flex-col gap-6">
                            <div>
                                {book.author ? <p className="text-2xl mb-2">Par: {book.author}</p> : null}

                                <div className="flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="yellow" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    <p className="">{book.meta.note / 20}</p>
                                </div>
                            </div>

                            <p className="max-w-[80%]">{book.meta.description}</p>

                            <div>
                                <p className="font-bold">Genres :</p>
                                {book.tags.map(tag => (
                                    <div key={tag} className="flex gap-2 items-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                                        <Tag
                                            text={genres[tag - 1].name}
                                            className="bg-transparent border-none p-0 m-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi veniam hic tempora nesciunt quisquam ipsam, iure facilis fugiat autem excepturi itaque suscipit sed et culpa necessitatibus ut, distinctio qui laboriosam natus molestias mollitia. Minus nobis eaque quis, expedita et doloribus ipsa officiis quos, laudantium cupiditate pariatur reprehenderit quas officia tempora voluptate assumenda quidem omnis nulla maxime distinctio! Architecto neque deserunt tempore id, eum recusandae quasi molestias dicta dolores dolorem voluptatem iusto natus impedit beatae autem fugit! Perferendis labore sint ad ut a soluta voluptatem, quisquam architecto ipsa accusantium non! Quis, deserunt iste nam eum dolores numquam officiis suscipit consequatur aspernatur, culpa iure adipisci reprehenderit vel ex quod eaque exercitationem. Ipsum maxime saepe numquam dolorem qui nostrum dolorum vitae nihil tempore maiores impedit recusandae quidem, adipisci, atque laudantium accusamus dolores. Veniam, labore inventore nostrum voluptatum aperiam id, consequatur dolores dolore ab ratione voluptas. Ipsum, repudiandae sunt? Non dicta beatae facilis molestias maxime, omnis enim dolor itaque amet architecto eveniet consectetur, commodi voluptatibus, similique repudiandae illo ad recusandae doloremque exercitationem vitae! Alias provident fuga, voluptates quisquam laboriosam neque rerum aspernatur ratione, expedita deserunt facere harum animi quo et possimus quidem nostrum similique praesentium repellat vel laborum dicta suscipit pariatur libero? Accusamus, quas.</p>
                </div>
            </div>
        </div>
    );
}
