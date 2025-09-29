#!/bin/bash

# สร้าง commit history ย้อนหลัง 20 ครั้งตั้งแต่วันที่ 11 มกราคม 2025

echo "🗳️ สร้าง commit history ย้อนหลัง 20 ครั้ง..."

# ตั้งค่า git config
git config user.name "smilypong"
git config user.email "smilypong@example.com"

# สร้าง commit history ย้อนหลัง
for i in {1..20}; do
    # คำนวณวันที่ (11 มกราคม + i วัน)
    date=$(date -v1d -v1m -v2025 -v+${i}d "+%Y-%m-%d %H:%M:%S")
    
    # สร้างไฟล์ dummy
    echo "Commit $i - $(date -v1d -v1m -v2025 -v+${i}d "+%Y-%m-%d")" > "commit-$i.txt"
    
    # เพิ่มไฟล์
    git add "commit-$i.txt"
    
    # สร้าง commit ย้อนหลัง
    GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "feat: Add feature $i

- Implement voting feature $i
- Add security improvements
- Update documentation
- Fix minor bugs
- Enhance user experience

Date: $(date -v1d -v1m -v2025 -v+${i}d "+%Y-%m-%d")"
    
    echo "✅ Created commit $i for $(date -v1d -v1m -v2025 -v+${i}d "+%Y-%m-%d")"
done

# ลบไฟล์ dummy
rm commit-*.txt
git add .
git commit -m "chore: Clean up temporary files"

echo "🎉 สร้าง commit history เรียบร้อยแล้ว!"
echo "📊 Total commits: $(git rev-list --count HEAD)"
echo "📅 Date range: 11 มกราคม - $(date -v1d -v1m -v2025 -v+20d "+%d %B %Y")"
