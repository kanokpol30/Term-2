function HomePage() {
  return (
    <div>
      <div className="text-center mt-5 p-3">
        <h1 className="text-4xl">ยินดีต้อนรับสู่แอปของฉัน</h1>
        <p className="text-lg mt-2">
          นี่คือ Next.js ที่ฉันเขียน</p>
      </div>
      <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/light">บทเรียนที่1 State ของการเปิด/ปิดหลอดไฟ</a>
      </div>
      <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/count">บทเรียนที่2 Count ของการเพิ่มตัวเลข</a>
      </div>
      <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/form">บทเรียนที่3 Form ของระบบ</a>
      </div>
      <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/jikan">บทเรียนที่4 Jikan API</a>
      </div>
      <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/new">บทเรียนที่5 News API</a>
      </div>
       <div className="text-center text-2xl mt-6 text-blue-300">
        <a href="/cheapshark">บทเรียนที่6 CheapShark API</a>
      </div>
    </div>


  );
}

export default HomePage;