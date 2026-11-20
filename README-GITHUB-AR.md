# رفع مسبار AI إلى GitHub Pages

## محتويات الرفع
ارفع الملفات الموجودة في جذر هذه الحزمة إلى جذر مستودع GitHub أو مجلد النشر الذي اخترته:
`index.html`، `manifest.json`، `sw.js`، `search-worker.js`، `version.json`، وملفات PNG للأيقونات.

## تفعيل GitHub Pages
1. افتح المستودع في GitHub ثم **Settings → Pages**.
2. اختر فرع النشر ومجلد الجذر (أو المجلد الذي وضعت فيه الملفات) ثم **Save**.
3. انتظر ظهور رابط الموقع وافتحه في Chrome عبر HTTPS.
4. لا تفتح `index.html` كملف محلي ولا من متصفح داخل تطبيق مراسلة؛ تثبيت PWA يتطلب رابط HTTPS ونجاح تحميل `manifest.json` و`sw.js` والأيقونات.
5. إذا كان تسجيل Google لا يعمل، أضف اسم المضيف فقط إلى Firebase Authentication → Settings → Authorized domains.

الإصدار داخل التطبيق: 2.73.0. ارفع ملفات جذر الحزمة فقط؛ لا ترفع مجلدات النسخ القديمة أو ملفات ZIP.
