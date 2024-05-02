function l(s) {
    if (s.length === 0) return '';
    let l = ''; for (let i = 0; i < s[0].length; i++){ for (let j = i + 1; j <= s[0].length; j++){ let p = s[0].substring(i, j); let v = true; for (let k = 1; k < s.length; k++){ if (!s[k].includes(p)) { v = false; break } } if (v && p.length > l.length) { l = p } } } return l
} console.log(l(process.argv.slice(2)))