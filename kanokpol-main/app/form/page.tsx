function FormPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">ลงทะเบียนเข้าสู่ระบบ</h1>
                    <p className="text-center text-gray-600 mb-8">กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                อีเมล
                            </label>
                            <input
                                type="email"
                                placeholder="กรุณาระบุ E-mail"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                รหัสผ่าน
                            </label>
                            <input
                                type="password"
                                placeholder="กรุณาระบุ รหัสผ่าน"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                        >
                            ลงทะเบียน
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormPage;