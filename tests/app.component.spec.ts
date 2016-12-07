import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppRootComponent } from '../app/app.component';

describe('app root', () => {
    let fixture, comp;

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [AppRootComponent],
        })
    });

    it('should work', () => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(AppRootComponent);
            comp = fixture.componentInstance;
            let de = fixture.debugElement.query(By.css('h1'));

            // confirm the element's content
            expect(de.nativeElement.textContent).toContain("Hello world");
        })
    })

     it('should click button', () => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(AppRootComponent);
            comp = fixture.componentInstance;
            fixture.detectChanges();
            
            let greet = fixture.debugElement.query(By.css('span'));
            let de = fixture.debugElement.query(By.css('button'));
            expect(greet.nativeElement.textContent).toContain('Yo');
            de.triggerEventHandler('click', null);
            // confirm the element's content
            fixture.detectChanges();
            expect(greet.nativeElement.textContent).toContain('Whats up');
        })
    })
})