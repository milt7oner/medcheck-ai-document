# 📂 Document Review System (AI-powered)

Sistema para la captura y revisión automatizada de documentos médicos.  
Incluye backend (NestJS), frontend (Next.js), OCR (Tesseract.js) y almacenamiento S3-compatible (MinIO/Backblaze).

---

## 🚀 Tech Stack
- **Frontend:** Next.js, TailwindCSS, React Query
- **Backend:** NestJS, PostgreSQL, Prisma, OCR (Tesseract.js), LangChain
- **Storage:** MinIO (local), Backblaze B2 (prod)
- **Infra:** Docker, GitHub Actions (CI), pnpm

---

## 🛠️ Setup Local

### 1. Clonar el repo
```bash
git clone 
cd 

## 2. Levantar infraestructura (DB + MinIO)
docker-compose up -d

## 3. Backend 

cd backend
cp .env.example .env
pnpm install
pnpm prisma:migrate
pnpm dev

## 4. Frontend 

cd frontend
pnpm install
pnpm dev

## 5. Acceso

Backend API → http://localhost:3001

Frontend UI → http://localhost:3000

MinIO Console → http://localhost:9001

##GitHub Actions CI

##El proyecto usa lint/test automáticos en cada push y pull request.
##Si los pipelines fallan, el merge queda bloqueado hasta que se solucionen los errores.

