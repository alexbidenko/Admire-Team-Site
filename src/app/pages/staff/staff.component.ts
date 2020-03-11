import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffList = [
    {
      avatar: 'Я.png',
      name: 'Александр Биденко',
      category: ['leader'],
      profile: 'Teamleader and Developer',
      description: `Лидер проекта и старший разработчик компании.
        Имеет опыт Web разработки (Angular и VueJS), нативной Android разработки на Java и Kotlin,
        а также Backend разработки php (Laravel), Kotlin (Spring Boot).`
    },
    {
      avatar: 'Аким.png',
      name: 'Аким Гребенкин',
      category: ['backend'],
      profile: 'Backend Developer',
      description: `Backend разработчик компании с большим опытом работы на Python с фреймворками Flask и Django.
        Неоднократные победы на региональных и всероссийских конкурсах и хакатонах.`
    },
    {
      avatar: 'Витя.png',
      name: 'Виктор Солонарь',
      category: ['frontend'],
      profile: 'Web and Mobile Developer',
      description: `Web Fullstack разработчик с широким стеком технологий для Web,
        мобильно кросплатформенной разработки и Backend: VueJS, Flutter, Django.`
    },
    {
      avatar: 'Миша.png',
      name: 'Михаил Копцев',
      category: ['backend'],
      profile: 'Backend Developer',
      description: `Backend разработчик компании с опытом работы на Python с фреймворками Flask и Django,
        а также в области машинного обучения и работы с большими данными.`
    },
    {
      avatar: 'Артем.png',
      name: 'Артем Остапчук',
      category: ['design'],
      profile: 'UX / UI Design',
      description: `Главный дизайнер. Владеет навыками UX/UI дизайна, а также свободно владеет Adobe Photoshop, Adobe Ilustrator, Figma.
        Обширный опыт в создании дизайна Web страниц, обработке фотограффий, создании логотипов.`
    }
  ];

  filters = ['leader', 'frontend', 'backend', 'design'];

  constructor() { }

  ngOnInit() {
  }

  filteredStaff(): any[] {
    return this.staffList.filter(el => el.category.find(cat => this.filters.indexOf(cat) > -1) != null);
  }

  changeFilter(key: string) {
    if (this.filters.indexOf(key) > -1) {
      this.filters.splice(this.filters.indexOf(key), 1);
    } else {
      this.filters.push(key);
    }
  }

  isFilter(key: string): boolean {
    return this.filters.indexOf(key) > -1;
  }
}
