// وسيط بحث مجاني على Cloudflare Workers (يدعم CORS) — انسخه كما هو
export default {
  async fetch(req) {
    const cors = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json; charset=utf-8" };
    if (req.method === "OPTIONS") return new Response(null, { headers: { ...cors, "Access-Control-Allow-Headers": "*" } });
    const q = (new URL(req.url).searchParams.get("q") || "").slice(0, 200);
    if (!q) return new Response("[]", { headers: cors });
    const strip = s => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
    try {
      const r = await fetch("https://html.duckduckgo.com/html/?q=" + encodeURIComponent(q), {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; MisbarSearch/1.0)", "Accept-Language": "ar,en;q=0.8" }
      });
      const h = await r.text(), out = [];
      const re = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<a[^>]*class="result__snippet"[^>]*>([\s\S]*?)<\/a>/g;
      let m;
      while ((m = re.exec(h)) && out.length < 6) {
        let u = m[1]; const mm = u.match(/uddg=([^&]+)/); if (mm) u = decodeURIComponent(mm[1]);
        out.push({ t: strip(m[2]), s: strip(m[3]), u });
      }
      return new Response(JSON.stringify(out), { headers: { ...cors, "Cache-Control": "public, max-age=300" } });
    } catch (e) { return new Response("[]", { headers: cors }); }
  }
};
