<h1 align="center">Fassal</h1>

**Fassal** is a web application designed to streamline the process of buying and selling agricultural commodities

## Getting Started

#### Backend
1. Clone the repository: 
```bash
git clone https://github.com/fvizpal/fassal.git
cd fassal/backend
```

2. Create a virutal environment:
```bash
python -m venv env
env\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Apply migrations:
```bash
python manage.py migrate
```

5. Run the development server
```bash
python manage.py runserver
```

#### Frontend
1. Navigate to the frontend directory: 
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.