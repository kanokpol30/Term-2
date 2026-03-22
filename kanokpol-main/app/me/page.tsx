function MePage() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            {/* Header */}
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    หน้าของฉัน
                </h1>
                <p className="text-xl text-slate-400">
                    ยินดีต้อนรับทัวคุณ
                </p>
            </div>

            {/* Back Link */}
            <div className="mt-12">
                <a href="/" className="text-blue-400 hover:text-blue-300 underline">
                    ← กลับไปหน้าแรก
                </a>
            </div>
        </div>
    );
}

export default MePage;