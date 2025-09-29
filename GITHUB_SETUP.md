# 🚀 GitHub Repository Setup Guide

## 📋 ขั้นตอนการสร้าง Repository บน GitHub

### 1. ไปที่ GitHub
เปิดเบราว์เซอร์ไปที่: https://github.com/smilypong

### 2. สร้าง Repository ใหม่
1. คลิกปุ่ม **"New"** หรือ **"+"** (มุมขวาบน)
2. เลือก **"New repository"**

### 3. ตั้งค่า Repository
- **Repository name**: `fhevm-voting-system`
- **Description**: `Privacy-preserving blockchain voting system with FHEVM technology`
- **Visibility**: เลือก **Public** หรือ **Private**
- **⚠️ สำคัญ**: **อย่า** check "Add a README file" (เรามีแล้ว)
- **อย่า** check "Add .gitignore" (เรามีแล้ว)
- **อย่า** check "Choose a license" (เราจะเพิ่มทีหลัง)

### 4. สร้าง Repository
คลิกปุ่ม **"Create repository"**

### 5. Push โปรเจค
หลังจากสร้าง repository แล้ว รันคำสั่ง:

```bash
git push -u origin main
```

## 🎯 Alternative: ใช้ชื่อ Repository อื่น

หากชื่อ `fhevm-voting-system` ไม่ว่าง ลองใช้ชื่อเหล่านี้:

- `fhevm-voting`
- `blockchain-voting-system`
- `privacy-voting`
- `fhevm-demo`
- `voting-system-fhevm`

## 🔧 วิธีเปลี่ยนชื่อ Repository

หากต้องการเปลี่ยนชื่อ repository:

1. ไปที่ repository ที่สร้างแล้ว
2. คลิก **Settings** (แท็บขวาสุด)
3. เลื่อนลงไปหา **Repository name**
4. เปลี่ยนชื่อและคลิก **Rename**

## 📱 หลังจาก Push สำเร็จ

คุณจะเห็น:
- ✅ โปรเจค FHEVM Voting System บน GitHub
- ✅ README.md ที่สวยงาม
- ✅ ไฟล์ทั้งหมดพร้อมใช้งาน
- ✅ Live server ที่ http://localhost:53817

## 🚀 ทดสอบ Live Server

```bash
# หยุด server ปัจจุบัน (Ctrl+C)
# แล้วรันใหม่
npm run live
```

## 📱 Demo URLs

| Demo | URL | Port | คำอธิบาย |
|------|-----|------|----------|
| **Main Demo** | http://localhost:3000 | 3000 | Demo หลัก |
| **FHEVM Demo** | http://localhost:3001 | 3001 | Privacy voting |
| **Simple Voting** | http://localhost:3002 | 3002 | การลงคะแนนง่าย |
| **Demo Hub** | http://localhost:8080 | 8080 | รวม demo ทั้งหมด |

## 🆘 หากมีปัญหา

### Repository ไม่พบ
```bash
# ตรวจสอบ remote
git remote -v

# เปลี่ยน URL
git remote set-url origin https://github.com/smilypong/[REPO-NAME].git
```

### Port ถูกใช้งาน
```bash
# หยุด process ที่ใช้ port 3000
lsof -ti:3000 | xargs kill -9

# หรือใช้ port อื่น
npm run live-frontend  # port 3001
npm run live-voting    # port 3002
npm run serve          # port 8080
```

## 🎉 สำเร็จ!

หลังจากสร้าง repository และ push สำเร็จ คุณจะได้:
- 🗳️ FHEVM Voting System บน GitHub
- 📱 Live demo ที่ใช้งานได้
- 📚 Documentation ครบครัน
- 🚀 Ready to share!

---
**Happy Coding! 🎉**
