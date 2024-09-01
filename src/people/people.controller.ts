import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { PeopleService } from './people.service';   


@Controller('people')   // {{baseUrl}}/people/
export class PeopleController {
    constructor(private readonly peopleService: PeopleService) {}

    // GET /people --> []
    // @Get()
    // getPeople() {
    //     return [];
    // }

    // GET /people?weapon='...' --> []
    @Get()
    getPeople( @Query('weapon') weapon: 'stars' | 'katana' ) {
        return this.peopleService.getPeople(weapon);
    }

    // GET /people/:id
    @Get(':id')
    getOnePerson( @Param('id') id: String ) {
        try {
            return this.peopleService.getOnePerson(+id);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    // POST /people
    @Post()
    createPerson( @Body() createPersonDto: CreatePeopleDto) {
        return this.peopleService.createPerson(createPersonDto);
    }

    // PUT /people/:id
    @Put(':id')
    updatePerson( @Param('id') id: String, @Body() updatePersonDto: UpdatePeopleDto) {
        return this.peopleService.updatePerson(+id, updatePersonDto);
    }

    @Delete(':id')
    removePerson( @Param('id') id: String ) {
        return this.peopleService.removePerson(+id);
    }


}


