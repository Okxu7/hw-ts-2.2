// // Абстрактний батьківський клас
//     abstract class Car {
//     // public: доступно звідусіль. Рік випуску — відкрита інформація.
//     public year: number;
    
//     // protected: доступно цьому класу та похідним. Марку встановлюють самі спадкоємці.
//     protected brand: string;
    
//     // private: доступно тільки всередині Car. VIN-код — конфіденційна інформація бази.
//     private vinCode: string;

//     constructor(brand: string, year: number, vinCode: string) {
//         this.brand = brand;
//         this.year = year;
//         this.vinCode = vinCode;
//     }

//     // Абстрактний метод для реалізації в похідних класах
//     abstract showDescription(): void;

//     // Допоміжний захищений метод для доступу до приватного VIN-коду з похідних класів
//     protected getVin(): string {
//         return this.vinCode;
//     }
// }

// // 1. Похідний клас Toyota
// class Toyota extends Car {
//     public model: string;
//     // private: внутрішня характеристика конкретної моделі, яку не можна змінити ззовні
//     private isHybrid: boolean;

//     constructor(year: number, vinCode: string, model: string, isHybrid: boolean) {
//         super("Toyota", year, vinCode); // Виклик конструктора батьківського класу
//         this.model = model;
//         this.isHybrid = isHybrid;
//     }

//     public showDescription(): void {
//         console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Гібрид: ${this.isHybrid ? 'Так' : 'Ні'}, VIN: ${this.getVin()}`);
//     }
// }

// // 2. Похідний клас BMW
// class BMW extends Car {
//     public model: string;
//     // protected: налаштування, до якого можуть мати доступ специфічні M-модифікації цього класу
//     protected mPerformance: boolean;

//     constructor(year: number, vinCode: string, model: string, mPerformance: boolean) {
//         super("BMW", year, vinCode);
//         this.model = model;
//         this.mPerformance = mPerformance;
//     }

//     public showDescription(): void {
//         console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year}, M-Performance: ${this.mPerformance ? 'Так' : 'Ні'}, VIN: ${this.getVin()}`);
//     }
// }

// // 3. Похідний клас Tesla
// class Tesla extends Car {
//     public model: string;
//     // private: ємність батареї є закритою характеристикою, яка може змінюватися лише через внутрішні методи (наприклад, деградація)
//     private batteryCapacity: number;

//     constructor(year: number, vinCode: string, model: string, batteryCapacity: number) {
//         super("Tesla", year, vinCode);
//         this.model = model;
//         this.batteryCapacity = batteryCapacity;
//     }

//     public showDescription(): void {
//         console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year},
//  Батарея: ${this.batteryCapacity} кВт-год, VIN: ${this.getVin()}`);
//     }
// }

// // Створення екземплярів (по 2 моделі для кожного похідного класу)
// const camry = new Toyota(2022, "VIN11111", "Camry", true);
// const rav4 = new Toyota(2023, "VIN22222", "RAV4", false);

// const x5 = new BMW(2021, "VIN33333", "X5", false);
// const m3 = new BMW(2023, "VIN44444", "M3", true);

// const modelS = new Tesla(2023, "VIN55555", "Model S", 100);
// const model3 = new Tesla(2022, "VIN66666", "Model 3", 75);

// // Виведення властивостей на екран
// camry.showDescription();
// rav4.showDescription();
// x5.showDescription();
// m3.showDescription();
// modelS.showDescription();
// model3.showDescription();


// 1. Знаходимо контейнер на сторінці для виведення результату
const container = document.getElementById('app-container');

// ==========================================
// БАТЬКІВСЬКИЙ АБСТРАКТНИЙ КЛАС
// ==========================================
abstract class Car {
    // public: доступно звідусіль
    public year: number;
    
    // protected: доступно цьому класу та похідним
    protected brand: string;
    
    // private: доступно тільки всередині Car
    private vinCode: string;

    constructor(brand: string, year: number, vinCode: string) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }

    // Абстрактний метод, який повертає опис у вигляді рядка
    abstract getCarDescription(): string;

    // Захищений метод для доступу до приватного VIN
    protected getVinCode(): string {
        return this.vinCode;
    }
}

// ==========================================
// ПОХІДНІ КЛАСИ (МАРКИ АВТО)
// ==========================================
class Toyota extends Car {
    public model: string;
    private isHybrid: boolean; 

    constructor(year: number, vinCode: string, model: string, isHybrid: boolean) {
        super("Toyota", year, vinCode); // Виклик батьківського конструктора
        this.model = model;
        this.isHybrid = isHybrid;
    }

    public getCarDescription(): string {

          console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year},  Гібрид: ${this.isHybrid ? 'Так' : 'Ні'},  VIN: ${this.getVinCode()}`);
            return `🚗 [${this.brand}] ${this.model} (${this.year} р.), Гібрид: ${this.isHybrid ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}

class BMW extends Car {
    public model: string;
    protected isMPerformance: boolean; 

    constructor(year: number, vinCode: string, model: string, isMPerformance: boolean) {
        super("BMW", year, vinCode);
        this.model = model;
        this.isMPerformance = isMPerformance;
    }

    public getCarDescription(): string {
          console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year},  M-Performance: ${this.isMPerformance ? 'Так' : 'Ні'},  VIN: ${this.getVinCode()}`);

        return `🏎️ [${this.brand}] ${this.model} (${this.year} р.), M-Performance: ${this.isMPerformance ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}

class Tesla extends Car {
    public model: string;
    private batteryCapacity: number; 

    constructor(year: number, vinCode: string, model: string, batteryCapacity: number) {
        super("Tesla", year, vinCode);
        this.model = model;
        this.batteryCapacity = batteryCapacity;
    }

    public getCarDescription(): string {

                  console.log(`[${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} кВт-год,   VIN: ${this.getVinCode()}`);

        return `⚡ [${this.brand}] ${this.model} (${this.year} р.), Батарея: ${this.batteryCapacity} кВт-год, VIN: ${this.getVinCode()}`;
    }
}

// ==========================================
// СТВОРЕННЯ ЕКЗЕМПЛЯРІВ (по 2 моделі)
// ==========================================
const carsList: Car[] = [
    new Toyota(2022, "JT111", "Camry", true),
    new Toyota(2023, "JT222", "RAV4", false),
    new BMW(2021, "WB333", "X5", false),
    new BMW(2024, "WB444", "M3", true),
    new Tesla(2023, "5Y555", "Model S", 100),
    new Tesla(2022, "5Y666", "Model 3", 75)
];

// ==========================================
// ВИВІД НА ЕКРАН
// ==========================================
if (container) {
    const title = document.createElement('h2');
    title.textContent = 'Мій Автопарк:';
    container.appendChild(title);

    // Проходимося по масиву створених автомобілів
    carsList.forEach(car => {
        const paragraph = document.createElement('p');
        paragraph.className = 'car-card'; // Додаємо клас для стилів з HTML
        paragraph.textContent = car.getCarDescription(); // Отримуємо опис авто
        container.appendChild(paragraph); // Додаємо на сторінку
    });
}