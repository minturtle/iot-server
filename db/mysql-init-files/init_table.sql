create table cctv_img (
    idx int not null auto_increment primary key,
    img longblob,
    captured_time datetime default current_timestamp
) default character set utf8 collate utf8_general_ci;
