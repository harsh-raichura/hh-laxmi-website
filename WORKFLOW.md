# H.H. Laxmi Website - Git Workflow

## 🌿 Branching Strategy

### **Three Main Branches:**

#### 1️⃣ **`integration`** - Development Branch
- **Purpose**: Active development and testing
- **Use for**: New features, bug fixes, experiments
- **Testing**: All changes tested here before moving to release
- **Auto-deployment**: Can be connected to staging environment

#### 2️⃣ **`release`** - Production Ready Branch  
- **Purpose**: Stable code ready for production
- **Use for**: Final releases to www.hhlaxmi.com
- **Quality**: Only thoroughly tested code from integration
- **Auto-deployment**: Connected to live website

#### 3️⃣ **`master`** - Archive/Backup Branch
- **Purpose**: Original codebase and major milestones
- **Use for**: Backup and reference

---

## 🔄 **Development Workflow**

### **Day-to-Day Development:**
```bash
# 1. Work on integration branch
git checkout integration

# 2. Make changes and commit
git add .
git commit -m "Add new feature: WhatsApp integration"

# 3. Push to integration
git push origin integration
```

### **Preparing a Release:**
```bash
# 1. Ensure integration is stable and tested
git checkout integration

# 2. Merge integration into release
git checkout release
git merge integration

# 3. Push release branch (triggers production deployment)
git push origin release
```

### **Hotfix Process:**
```bash
# 1. Create hotfix from release
git checkout release
git checkout -b hotfix/urgent-fix

# 2. Make fix and test
git add .
git commit -m "Fix: Critical WhatsApp button issue"

# 3. Merge back to release and integration
git checkout release
git merge hotfix/urgent-fix
git checkout integration  
git merge hotfix/urgent-fix

# 4. Deploy
git push origin release
git push origin integration
```

---

## 🚀 **Deployment Setup**

### **Vercel Configuration:**

#### **Production Deployment:**
- **Branch**: `release`
- **URL**: www.hhlaxmi.com
- **Environment**: Production
- **Auto-deploy**: On push to release branch

#### **Staging Deployment (Optional):**
- **Branch**: `integration` 
- **URL**: hhlaxmi-staging.vercel.app
- **Environment**: Staging
- **Auto-deploy**: On push to integration branch

---

## ✅ **Quality Checklist Before Release**

### **Before Merging to Release:**
- [ ] All features tested on integration branch
- [ ] Website loads properly on mobile and desktop
- [ ] WhatsApp integration working
- [ ] Contact form functioning
- [ ] All product images displaying correctly
- [ ] About Us page content accurate
- [ ] Copyright footer displaying
- [ ] Navigation working (including category filtering)
- [ ] Performance optimized

### **Release Process:**
1. **Test**: Verify everything works on integration
2. **Merge**: Move stable code to release branch
3. **Deploy**: Push release branch to trigger production deployment
4. **Verify**: Check live website functionality
5. **Monitor**: Watch for any issues

---

## 🔧 **Commands Reference**

### **Branch Operations:**
```bash
# Check current branch
git branch --show-current

# Switch branches
git checkout integration
git checkout release

# View all branches
git branch -a

# Create new feature branch
git checkout -b feature/new-product-page
```

### **Release Operations:**
```bash
# Prepare release
git checkout release
git merge integration
git push origin release

# Quick status check
git status
git log --oneline -5
```

---

## 📊 **Branch Status**

- **integration**: ✅ Active development
- **release**: ✅ Production ready  
- **master**: ✅ Original codebase

**Current stable version**: v1.0.0 - Complete H.H. Laxmi website with product catalog, about us, and contact pages. 