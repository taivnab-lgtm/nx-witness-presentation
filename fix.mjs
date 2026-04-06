import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'components', 'slides');
const files = fs.readdirSync(dir);
let modifiedCount = 0;

files.forEach(f => {
  if (f.startsWith('NX_') && f.endsWith('.tsx')) {
    const p = path.join(dir, f);
    let text = fs.readFileSync(p, 'utf8');
    
    // Replace text-[22px] with text-[17px] specifically for <p> tags
    const orig = text;
    text = text.replace(/(<p[^>]*class(?:Name)?=[\"\'\`][^\>]*?)text-\[22px\](.*?[\"\'\`].*?>)/gi, '$1text-[17px]$2');
    // Also let's replace headers if needed. 
    // NX_Slide_EmailNotification.tsx has text-[22px] for p.title and p.desc
    // But h5 tags are probably fine at text-[22px], let's check if the previous replaced all text-sm.
    
    if (text !== orig) {
      fs.writeFileSync(p, text);
      modifiedCount++;
      console.log('Modified', f);
    }
  }
});
console.log('Total files modified:', modifiedCount);
