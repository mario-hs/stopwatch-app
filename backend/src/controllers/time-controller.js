import fs from "fs";

export const createTime = async (req, res, next) => {
  const { time, date } = req.body;
  const id = Math.floor(Date.now() * Math.random()).toString(36);
  try {
    const data = JSON.parse(
      fs.readFileSync("./src/config/registros.json", "utf8")
    );
    data.times.push({ id, time, date });
    fs.writeFileSync("./src/config/registros.json", JSON.stringify(data));
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteTime = async (req, res, next) => {
  try {
    // await Aluno.findByIdAndDelete(req.params.id);
    const data = JSON.parse(
      fs.readFileSync("./src/config/registros.json", "utf8")
    );
    console.log(req.params.id);
    const times = data.times.filter((time) => time.id !== req.params.id);
    const newTimes = { times: times };
    console.log(newTimes);
    fs.writeFileSync("./src/config/registros.json", JSON.stringify(newTimes));

    res.status(200).json({ message: "Aluno excluído com sucesso." });
  } catch (error) {
    next(error);
  }
};

export const getTimes = async (req, res, next) => {
  try {
    const times = JSON.parse(
      fs.readFileSync("./src/config/registros.json", "utf8")
    );

    res.status(200).json(times);
  } catch (error) {
    next(error);
  }
};
