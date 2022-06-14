export default function Footer() {
  return (
    <div className="bg-gray-800 text-gray-100 space-top space-x pb-20">
      <div className="mx-auto md:max-w-3xl max-w-xs text-center">
      <h1 className="mb-4">Forweb</h1>
      <p className="font-normal mb-6 text-lg">צרו קשר ובידקו אם מתאים לכם לעבוד עם Forweb</p>

      <a href="https://calendly.com/borispov/consult">
        <button className="py-2 px-10 bg-primary-300 hover:bg-primary-700 hover:px-20 transition-all ease-in-out duration-500 text-black font-bold text-xl mx-auto text-center rounded-lg">
          קבעו שיחה
        </button>
      </a>

      </div>

    </div>
  )
}