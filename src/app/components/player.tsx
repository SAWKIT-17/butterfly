export default function VideoPlayer() {
    return (
        <div className="flex justify-center items-center max-h-screen bg-black w-full max-w-3xl">
            <video
            className="w-full max-w-3xl"
            playsInline
            muted={false}
            controls
            >
            <source src="https://filedn.eu/lWsEldFrD0ljPhHINdv6TVJ/media/Films/L'effet%20Papillon.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas le format vidéo.
            </video>
        </div>
        );
    }