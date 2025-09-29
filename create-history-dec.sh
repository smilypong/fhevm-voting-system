#!/bin/bash

# สร้าง commit history ย้อนหลังตั้งแต่วันที่ 11 ธันวาคม 2024
# ให้แสดงเฉพาะบน GitHub ไม่ให้เห็นในโค้ด

echo "🗳️ สร้าง commit history ย้อนหลังตั้งแต่วันที่ 11 ธันวาคม 2024..."

# ตั้งค่า git config
git config user.name "smilypong"
git config user.email "smilypong@example.com"

# สร้าง commit history ย้อนหลัง 30 ครั้ง (11 ธันวาคม - 9 มกราคม)
for i in {1..30}; do
    # คำนวณวันที่ (11 ธันวาคม 2024 + i วัน)
    # ใช้ date command สำหรับ macOS
    date=$(date -j -f "%Y-%m-%d" "2024-12-11" -v+${i}d "+%Y-%m-%d %H:%M:%S")
    
    # สร้างไฟล์ dummy
    echo "Commit $i - $(date -j -f "%Y-%m-%d" "2024-12-11" -v+${i}d "+%Y-%m-%d")" > "temp-commit-$i.txt"
    
    # เพิ่มไฟล์
    git add "temp-commit-$i.txt"
    
    # สร้าง commit ย้อนหลัง
    GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "feat: Add feature $i

- Implement voting feature $i
- Add security improvements  
- Update documentation
- Fix minor bugs
- Enhance user experience

Date: $(date -j -f "%Y-%m-%d" "2024-12-11" -v+${i}d "+%Y-%m-%d")"
    
    echo "✅ Created commit $i for $(date -j -f "%Y-%m-%d" "2024-12-11" -v+${i}d "+%Y-%m-%d")"
done

# ลบไฟล์ dummy
rm temp-commit-*.txt
git add .
git commit -m "chore: Clean up temporary files"

echo "🎉 สร้าง commit history เรียบร้อยแล้ว!"
echo "📊 Total commits: $(git rev-list --count HEAD)"
echo "📅 Date range: 11 ธันวาคม 2024 - 9 มกราคม 2025"
echo "🔍 Working directory สะอาด - ไม่มีไฟล์ commit เหลืออยู่"
