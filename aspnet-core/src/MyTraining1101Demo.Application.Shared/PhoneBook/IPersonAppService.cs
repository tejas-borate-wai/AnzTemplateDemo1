using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MyTraining1101Demo.PhoneBook.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyTraining1101Demo.PhoneBook
{
    public interface IPersonAppService : IApplicationService
    {
        ListResultDto<PersonListDto> GetPeople(GetPeopleInput input);
    }
}
