"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Contact() {
  const router = useRouter();

  interface FormValues {
    company: string;
    name: string;
    message: string;
    raws: number;
    type: string;
    placeholder: string;
  }

  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // 送信完了メッセージ用の状態
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    let data = {
      company: companyRef.current?.value,
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setIsSubmitted(true); // 送信完了メッセージを表示
          console.log("メール送信完了");
          router.push("/success");
        }
      })
      .catch((error) => {
        console.error("エラーが発生しました:", error);
      });
    setIsLoading(false);
  };

  return (
    <main>
      <div className="max-w-[90%] md:max-w-[65%] mx-auto text-center">
        <h1 className="font-extrabold text-3xl md:text-4xl mt-16">
          お問い合わせ
        </h1>
        <p className="text-muted-foreground mt-4 mb-4 text-sm">
          弊社へのお問い合わせはこちらにお願いいたします。
          <br />
          3営業日以内にご返信させていただきます。
        </p>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
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
                ref={companyRef}
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
                ref={nameRef}
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
                ref={emailRef}
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
                ref={messageRef}
              ></textarea>
            </div>

            {/* 送信ボタン */}
            {/* 送信ボタンまたはローディング表示 */}
            {isLoading ? (
              <div className="loader  font-bold text-center mt-4 mb-4">
                読み込み中...
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                送信
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
