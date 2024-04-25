//Question one

class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  
  // Rental class
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const startDate = this.rentalStartDate.getTime();
      const endDate = this.rentalEndDate.getTime();
      const duration = endDate - startDate;
      return Math.ceil(duration / (1000 * 60 * 60 * 24)); // Convert milliseconds to days and round up
    }
  }
  
  // Create an instance of Car
  const myCar = new Car("Toyota", "Camry", 2020, true);
  
  // Create an instance of Rental involving the car
  const rentalInfo = new Rental(myCar, "John Doe", new Date("2024-04-20"), new Date("2024-04-25"));
  
  // Calculate the rental duration
  const rentalDuration = rentalInfo.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");

  
  question2
  class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  
  
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }
  
  