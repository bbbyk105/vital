export default function contact() {
  interface FormValues {
    company: string;
    name: string;
    message: string;
    raws: number;
    type: string;
    placeholder: string;
  }

  const handleSubmit = (e) => {};

  return (
    <main>
      <div className="max-w-[65%] mx-auto text-center">
        <h1 className="font-extrabold text-xl md:text-4xl my-4">
          お問い合わせ
        </h1>
        <p className="text-muted-foreground mb-8">
          弊社へのお問い合わせはこちらにお願いいたします。
          <br />
          3営業日以内にご返信させていただきます。
        </p>
        <form onSubmit={(e) => hendleSubmit(e)}>
          <div className="bg-slate-100 p-6 rounded-md">
            {/* 会社名 */}
            <div className="mb-4 text-left">
              <label htmlFor="company" className="block font-medium mb-2">
                会社名 ※個人の場合はなし
              </label>
              <input
                id="company"
                type="text"
                placeholder="会社名を入力してください"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 名前 */}
            <div className="mb-4 text-left">
              <label htmlFor="name" className="block font-medium mb-2">
                氏名
              </label>
              <input
                id="name"
                type="text"
                placeholder="お名前を入力してください"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* メールアドレス */}
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block font-medium mb-2">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="メールアドレスを入力してください"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div className="mb-4 text-left">
              <label htmlFor="message" className="block font-medium mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                placeholder="お問い合わせ内容を入力してください"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              onChange={""}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
