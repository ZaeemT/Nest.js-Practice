import { Injectable } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Injectable()
export class PeopleService {
    private ninjas = [
        { id: 0, name: 'ninjaA', weapon: 'stars' },
        { id: 1, name: 'ninjaB', weapon: 'katana' }
    ]

    getPeople(weapon?: 'stars' | 'katana') {
        console.log(this.ninjas);
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas;
    }

    getOnePerson( id: number ) {
        const person = this.ninjas.find((ninja) => ninja.id === id);

        if (!person) {
            throw new Error("Person not found");
        }

        return person;
    }

    createPerson(createPersonDto: CreatePeopleDto) {
        const newPerson = {
            ...createPersonDto,
            id: Date.now(),
        };

        this.ninjas.push(newPerson);

        return newPerson;
    }

    updatePerson(id: number, updatePersonDto: UpdatePeopleDto ) {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return { ...ninja, ...updatePersonDto};
            }

            return ninja;
        });

        return this.getOnePerson(id);
    }

    removePerson(id: number) {
        const toBeRemoved = this.getOnePerson(id)

        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

        return toBeRemoved;
    }
}
