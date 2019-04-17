import { IsNotEmpty } from 'class-validator';

export class PostTimelineDto {
    
    @IsNotEmpty({
        message: "아무런 내용을 입력하지 않았습니다."
    })
    content: string;
}