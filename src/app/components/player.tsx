export default function VideoPlayer() {
    return (
        <div className="flex justify-center items-center max-h-screen bg-black w-full max-w-3xl">
            <video
            className="w-full max-w-3xl"
            controls
            >
            <source src="https://filedn.eu/lWsEldFrD0ljPhHINdv6TVJ/media/Films/L'effet%20Papillon.avi" type="video/avi" />
            Votre navigateur ne supporte pas le format vidéo.
            </video>
        </div>
        );
    }