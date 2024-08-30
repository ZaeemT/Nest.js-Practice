import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Controller('people')   // {{baseUrl}}/people/
export class PeopleController {

    // GET /people --> []
    @Get()
    getPeople() {
        return [];
    }

    // GET /people?type='slim' --> []
    // @Get()
    // getPeople( @Query('type') type: String ) {
    //     return [{type}];
    // }

    // GET /people/:id
    @Get(':id')
    getOnePerson( @Param('id') id: String ) {
        return {id};
    }

    // POST /people
    @Post()
    createPerson( @Body() createPersonDto: CreatePeopleDto) {
        return {
            name: createPersonDto.name
        };
    }

    // PUT /people/:id
    @Put(':id')
    updatePerson( @Param('id') id: String, @Body() updatePersonDto: UpdatePeopleDto) {
        return {
            id,
            name: UpdatePeopleDto.name
        };
    }

    @Delete(':id')
    removePerson( @Param('id') id: String ) {
        return {id};
    }


}


